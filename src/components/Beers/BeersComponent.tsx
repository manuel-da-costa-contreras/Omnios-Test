import React, { ReactElement } from 'react';

export function BeersComponent(props: any): ReactElement {
  // TODO: could've change it to an useffect in parent component
  const filteredData = props.data && props.data.sort((a, b) => b.abv - a.ibu);

  const onFilterChanged = (e: any) => {
    return props.onFiltersChange(e.target.value);
  };

  return (
    <div className="container">
      <div className="wrapper_header">
        <h1>{props.title}</h1>
        <div>
          <p> {props.filters_title} </p>
          <select name="filters" onChange={onFilterChanged}>
            <option value={''}></option>
            <option value={'abvActive'}>{props.filter_abv}</option>
            <option value={'ibuActive'}>{props.filter_ibu}</option>
          </select>
        </div>
      </div>
      <div className="item_wrapper">
        {props.data &&
          filteredData.map((item: any) => (
            <div className="item_container" key={item.id}>
              <div className="item">
                <p>{item.name}</p>
                <p>{item.tagline}</p>
                <p>{item.description}</p>
              </div>
              <div>
                <img className="beer_img" src={item.image_url} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

BeersComponent.defaultProps = {
  title: 'Not enough time, Tons of Beers',
  filters_title: 'Filter By',
  filter_abv: 'ABV',
  filter_ibu: 'IBU',
};
