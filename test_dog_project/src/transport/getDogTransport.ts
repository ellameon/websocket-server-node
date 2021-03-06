import {DogDto} from "../model/DogDto";
import {configStore} from "../store/ConfigStore";


export async function getDogTransport(): Promise<DogDto> {
  const url = configStore.dogUrl
  const response = await fetch(url)
  return await response.json()
}

