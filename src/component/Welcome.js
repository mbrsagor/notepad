import React, { Component } from 'react';

class Welcome extends Component {

    render() {

        const title = "Welcome to our website";
        const sub_title = <h3>We are learning React with Mbr-Sagor</h3>;
        const content = <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam maxime magnam in, ut sunt dolores praesentium temporibus delectus dolor iure fugit exercitationem iusto sint placeat omnis eligendi nesciunt quae enim?</p>

        return (
            <>
                <h1>{title ? title : 'No title found!'}</h1>
                {sub_title ? sub_title : 'No sub-title found'}
                {content ? content : 'No Content found'}
            </>
        );
    }
}

export default Welcome;

