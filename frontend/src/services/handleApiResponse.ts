import type {ApiResponseType} from "@/types";
import {handleUnauthorizedAccess} from "@/services/handleUnauthorizedAccess";

export async function handleApiResponse(response: Response): Promise<ApiResponseType> {
    if (!response.ok) {
        const res = await response.json() as ApiResponseType;
        if (response.status === 401) {
            await handleUnauthorizedAccess()
        }

        return res;

    }

    return await response.json() as ApiResponseType;
}