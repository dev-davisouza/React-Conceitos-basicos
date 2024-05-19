import PropTypes from "prop-types"

function Item ({msg, letsgo}) {
    return (
        <li>{msg} {letsgo}</li>
    )
}

Item.propTypes = {
    msg: PropTypes.string.isRequired,
    letsgo: PropTypes.string,
}

Item.defaultProps = {
    letsgo: "true"
}

export default Item