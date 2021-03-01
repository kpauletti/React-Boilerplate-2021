import { useQuery, useMutation, useQueryClient } from 'react-query';
import { api } from '#/api';

const apiCalls = {};

apiCalls.fetchProperties = async () => {
    const { data } = await api.get('/properties');
    return data;
};

apiCalls.fetchProperty = async propertyId => {
    const { data } = await api.get(`/properties/${propertyId}`);
    return data;
};

apiCalls.createProperty = async payload => {
    const { data } = await api.post('/properties', payload);
    return data;
};

apiCalls.deleteProperty = async propertyId => {
    const { data } = await api.delete(`/properties/${propertyId}`);
    return data;
};

export const useProperty = (propertyId, queryOptions = {}) => {
    return useQuery(['property', propertyId], () => apiCalls.fetchProperty(propertyId), queryOptions);
};

export const useProperties = (queryOptions = {}) => {
    return useQuery('properties', apiCalls.fetchProperties, queryOptions);
};

export const useCreateProperty = (payload, queryOptions = {}) => {
    const queryClient = useQueryClient();

    return useMutation(() => apiCalls.createProperty(payload), {
        onSuccess: () => {
            queryClient.invalidateQueries('properties');
        },
        ...queryOptions
    });
};

export const useDeleteProperty = (propertyId, queryOptions = {}) => {
    const queryClient = useQueryClient();

    return useMutation(() => apiCalls.deleteProperty(propertyId), {
        onSuccess: () => {
            queryClient.invalidateQueries('properties');
        },
        ...queryOptions
    });
};
