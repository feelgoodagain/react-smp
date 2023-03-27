import React from 'react';
import Page from './Page/Page';

const App = () => {
    return (
        <div>
            <div className="App">
                <Page>
                    router-view
                </Page>
            </div>
        </div>
    );
}

export default App;
