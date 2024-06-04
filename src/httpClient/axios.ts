type TimePayload = {
  time: string;
}

type AxiosResponse<T> = { data: T };

export const getTime = (): Promise<AxiosResponse<TimePayload>> => {

  return new Promise<AxiosResponse<TimePayload>>((resolve) => {
    setTimeout(() => {
      resolve({
        data: { time: new Date().toLocaleTimeString() }
      });
    }, 50);
  });
}
