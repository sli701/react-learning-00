import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    // children is a default property
    return <div className={classes}> {props.children}</div>
}

export default Card;

/**
 * card is a wrapper class.
 * .children property contains all the children element whenever Card is used
 * .className property contains all the .className string when Card is used
 * 1) custom components are not really HTML component. when inspecting, they are displayed using plain HTML elementss
 * 
 * drill in your component deeply enought, which will ends up using the dedault built-in elements
 * 
 * Props: used to pass data into components
 */