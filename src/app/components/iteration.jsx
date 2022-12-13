import React from "react";
import PropTypes from "prop-types";

const Iteration = ({ handleSort, selectedSort, columns, column }) => {
    return (
        <th
            onClick={
                columns[column].path
                    ? () => handleSort(columns[column].path)
                    : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
            className={
                columns[column].path &&
                selectedSort.path === columns[column].path
                    ? "bi bi-caret" +
                      (selectedSort.order === "asc" ? "-up-" : "-down-") +
                      "fill"
                    : ""
            }
        >
            {columns[column].name}
        </th>
    );
};

Iteration.propTypes = {
    handleSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    column: PropTypes.string.isRequired
};
export default Iteration;
