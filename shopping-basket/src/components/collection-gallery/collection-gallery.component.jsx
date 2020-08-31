import React from 'react';

import SHOPPING_DATA from '../../assets/cleaners.json';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-gallery.styles.scss';

class CollectionGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOPPING_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='collection-preview'>
                <div className='preview'>
                    {
                        collections
                            .map((item) => (
                                <CollectionItem key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
        )

    }
}

export default CollectionGallery;