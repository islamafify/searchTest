import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

export const Hit = ({ hit }) => {
  return (
    <article>
      <div className="hit-objectID">
			  <Highlight attribute="objectID" hit={hit} />
			</div>
    </article>
  );
};