import React from 'react';
import EnhancedLikes from '../../components/enhanced_likes/EnhancedLikes';
import EnhancedComments from '../../components/enhanced_comments.jsx/EnhancedComments';

function HigherOrderComponent() {
    return (
        <div className="App">
            <h1>Higher Order Components</h1>
            <EnhancedLikes />
            <br/><br/>
            <EnhancedComments />
        </div>
    );
}

export default HigherOrderComponent
