import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/6adb2604dbe02e954c7c7bf248e7c44518b5f70d/src/assets/images/logo.svg"
                        alt="Tiktok"
                    />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search account and videos" spellCheck={false} />

                    <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
