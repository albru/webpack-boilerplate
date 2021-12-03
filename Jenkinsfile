#!groovy
// -*- coding: utf-8; mode: Groovy; -*-
@Library('') _

properties([
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '7', daysToKeepStr: '', numToKeepStr: '7')),
    disableConcurrentBuilds(),
    disableResume()
]);

env.SA                    = "";
env.ARTIFACTORY_URL       = "";
env.DOCKER_REGISTRY       = "";

env.APP_NAME              = "";
env.APP_VERSION           = ""

env.DOCKER_IMAGE_FRONTEND = "${env.DOCKER_REGISTRY}.${ARTIFACTORY_URL}/${env.APP_NAME}:${env.APP_VERSION}";

//slackUtils.sendBuildStatusNotification(channelId: 'XXX') {
    node ('') {
        if (branch_name == "main") {
//             env.K8S_CLUSTER      = "";
//             env.K8S_NAMESPACE    = "";
//             env.DOCKER_IMAGE_TAG = env.APP_VERSION
//             checkout()
//             buildFrontend()
//             dockerPush()
//             deployK8S()
//             cleanUp()
        }
        else if (branch_name == "staging") {
            env.K8S_CLUSTER      = "";
            env.K8S_NAMESPACE    = "";
            env.DOCKER_IMAGE_TAG = "";
            checkout()
            buildFrontend()
            dockerPush()
            deployK8S()
            cleanUp()
        }
        else {
            checkout()
            sh "echo NOTHING WILL BE DEPLOYED"
            cleanUp()
        }
    }
// }

def checkout() {
    stage('Checkout sources') {
        checkout scm
    }
}

def buildFrontend() {
    stage('Build') {
        sh """
            docker-compose --env-file .env -f docker/docker-compose.prod.yml build --no-cache
        """
    }
}

def dockerPush() {
    stage('Docker Push to Artifactory') {
        // Artifactory settings
        def artifactoryServer = Artifactory.newServer(url: "https://${ARTIFACTORY_URL}", credentialsId: env.SA);
        artifactoryServer.connection.timeout = 1200;
        def artifactoryDocker = Artifactory.docker (server: artifactoryServer);
        // Artifactory push frontend
        def buildInfoFrontend = artifactoryDocker.push ("${env.DOCKER_IMAGE_FRONTEND}", env.DOCKER_REGISTRY);
        artifactoryServer.publishBuildInfo buildInfoFrontend
    }
}

def deployK8S() {
    stage('Deploy to K8S') {
        withCredentials([usernamePassword(credentialsId: "${env.SA}", usernameVariable: "", passwordVariable: "")]) {
            def deployer = docker.image('');
            deployer.pull();
            withEnv (["CLUSTER=${env.K8S_CLUSTER}"]) {
                deployer.inside('-u root') {
                    sh ("get-kubeconfig-basic");
                    sh ("envsubst < .helm/values.yaml > .helm/values_generated.yaml");
                    sh ("mv -f .helm/values_generated.yaml .helm/values.yaml");
                    sh ("helm3 upgrade --install ${env.APP_NAME} .helm --namespace ${env.K8S_NAMESPACE}");
                }
            }
        }
    }
}

def cleanUp() {
    stage ('Clean Workspace') {
        sh """
            docker image rm ${env.DOCKER_IMAGE_FRONTEND} || echo 'No image to clean'
        """
        cleanWs();
    }
}
