import axios from 'axios';

import endpoints from '../endpoints';

const listAPI = {
  get: (): Promise<{ data: { [key: string]: string } }> => axios.get(endpoints.list),
};

export default listAPI;
