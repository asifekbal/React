import React from 'react'


{/* <React.Fragment> </React.Fragment>   Can also be written as <></> */}
/* Only key attribute can be passed to a  React Fragment  */

function FragmentDemo() {
    return (
       /*  <React.Fragment>  
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo.</p>
        </React.Fragment> */
        <>  
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo.</p>
        </>
    )
}

export default FragmentDemo
