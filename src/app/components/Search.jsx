import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./Hit";

const searchClient = algoliasearch("J6DZ994SK8", "7ea76a30e25d1294f6f6371e53d09eda");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="all_q2a_app"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};