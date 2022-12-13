import React from "react";
import PropTypes from "prop-types";
import Iteration from "./iteration";

const Sort = ({ handleSort, selectedSort, columns }) => {
    return (
        <tr>
            {Object.keys(columns).map((column) => (
                <Iteration
                    key={column}
                    {...{
                        handleSort,
                        selectedSort,
                        columns,
                        column
                    }}
                />
            ))}
            <th />
        </tr>
    );
};

Sort.propTypes = {
    handleSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default Sort;
