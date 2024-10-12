import { ELang, INTL } from "@/constants/intl"
import { mockData } from "@/constants/mock"
import { useQuery } from "@tanstack/react-query"

export const useOwnerData = () => {
    return useQuery({
        queryKey: ['owner'],
        queryFn: () => {
            return mockData.owner
        }
    })
}

export const useInfoData = () => {
    return useQuery({
        queryKey: ['info'],
        queryFn: () => {
            return mockData.info
        }
    })
}

export const useIntl = () => {

    return useQuery({
        queryKey: ['intl'],
        queryFn: () => {
            const search = new URLSearchParams(window.location.search);
            return INTL[Object.values(ELang).includes(search.get('lng') as any) ? search.get('lng') as ELang : ELang.Ru]
        }
    })
}

export const useTech = () => {
    return useQuery({
        queryKey: ['tech'],
        queryFn: () => {
            return mockData.tech
        }
    })
}