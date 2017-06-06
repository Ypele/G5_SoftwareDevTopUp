import React from 'react'
import * as s from '../styles'
import moment from 'moment'

const CustomToolbar = (toolbar) => {
    const goToBack = () => {
        console.log(toolbar)
        //toolbar.date.setMonth(toolbar.date.getMonth() - 1);
        toolbar.date.setDate(toolbar.date.getDate()-7);
        toolbar.onNavigate('prev');
    };

    const goToNext = () => {
       toolbar.date.setDate(toolbar.date.getDate()+7);
        toolbar.onNavigate('next');
    };

    const goToCurrent = () => {
        const now = new Date();
        toolbar.date.setMonth(now.getMonth());
        toolbar.date.setYear(now.getFullYear());
        toolbar.onNavigate('current');
    };

    const label = () => {
        const date = moment(toolbar.date);
        return (
            <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
        );
    };

    return (
        <s.TableHeader >
            <s.HeaderLabel>{label()}</s.HeaderLabel>

            <div>
                <s.HeaderButton onClick={goToBack}>&#8249;</s.HeaderButton>
                <s.HeaderButton onClick={goToCurrent}>Today</s.HeaderButton>
                <s.HeaderButton onClick={goToNext}>&#8250;</s.HeaderButton>
            </div >
        </s.TableHeader>

    );
};

export default CustomToolbar;