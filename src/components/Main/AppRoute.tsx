import React, { ReactElement, useState, useEffect } from 'react';

import Loader from 'react-spinners/RotateLoader';
import { getBeers } from '../../api/data';
import { BeersComponent } from '../Beers/BeersComponent';

import Header from '../Header/Header';

// Loader Override Css
const override = `
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

export function CatalogueApp(): ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<any>({
    sortBy: '',
  });
  const [beers, setBeers] = useState<any>(undefined);

  const onFiltersChange = (callback: any) => {
    setFilters({ sortBy: callback });
  };

  /**
   * Initialization Effect
   */
  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const data = await getBeers();

        setBeers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [!beers]);

  // Early Return
  if (loading) {
    return (
      <Loader size={15} color={'#1B80DB'} loading={loading} css={override} />
    );
  }

  return (
    <div>
      <Header />

      <BeersComponent
        data={beers}
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
    </div>
  );
}
