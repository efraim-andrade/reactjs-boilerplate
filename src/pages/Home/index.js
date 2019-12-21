import React from 'react';

import useAxios from '~/services/api';
import { ExampleComponent } from '~/components';

export default function Home() {
  const [{ data, loading, error }] = useAxios('people/1');

  if (loading) return <span>Carregando...</span>;
  if (error) return <span>{`ocorreu um error: ${error}`}</span>;

  return <ExampleComponent title={data.name} />;
}
