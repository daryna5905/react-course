import axios from 'axios';
import { useCallback, useState } from 'react';
import apiRoutes from '../../../api/apiRoutes';

const useTeachersApi = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiRoutes.getAllTeachers);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTeacherById = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiRoutes.getTeacherById(id));
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addNewTeacher = useCallback(async ({ name, subject }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(apiRoutes.addTeacher, {
        name,
        subject,
      });
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const editTeacher = useCallback(async ({ id, name, subject }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.put(apiRoutes.updateTeacher(id), {
        name,
        subject,
      });
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteTeacher = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.delete(apiRoutes.deleteTeacher(id));
      setData((prev) => prev?.filter((teacher) => teacher.id !== id));
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchData,
    getTeacherById,
    addNewTeacher,
    editTeacher,
    deleteTeacher,
  };
};

export default useTeachersApi;
