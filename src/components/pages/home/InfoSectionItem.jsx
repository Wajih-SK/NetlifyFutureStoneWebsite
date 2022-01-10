import React, { Component } from 'react';


class InfoSectionItem extends Component {

    render() { 
        return ( 
            <li  className='info-item'>
                <div className='info-item-wrapper'>
                    <figure className={'info__item__pic-wrap ' + this.props.class} data-category={this.props.label}>
                    </figure>
                    <div className='info__item__text-wrap '>
        
                        <h5 className='info__item__text '>{this.props.text}</h5>
                    </div>
                </div>
             </li>

         );
    }
}
 
export default InfoSectionItem;