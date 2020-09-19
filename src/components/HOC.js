import React from 'react';


const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                colors: ['green', 'blue', 'yellow', 'red', 'pink', 'orange'],
                color: "#EAEAEA"
            }
            this.changeColor = this.changeColor.bind(this)
        }

        changeColor() {
            const colorArray = this.state.colors;
            var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            this.setState({ color: currentColor });
        }

        render() {
            return <WrappedComponent
                changeColor={this.changeColor}
                color={this.state.color}
            />;
        }
    }
    return HOC;
};

export default higherOrderComponent;



