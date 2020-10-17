
/**
 * MIT License
 * 
 * Copyright (c) 2020 Ronuse Agency, Adewale Azeez, Oyeleke Damilola.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';
import { ObjUtils, BoolUtils } from "../utils/"
import { Type, Alignment, Colors } from "../variables/"

export class Button extends Component {

    static defaultProps = {
        text: null,
        alignText: Alignment.CENTER,
        icon: null,
        alignIcon: Alignment.LEFT,
        rightIcon: null,
        tooltip: null,
        tooltipProps: null,
        type: null,
        link: null,
        raised: null,
        rounded: null,
        borderless: null,
        textonly: null,
        outlined: null
    }

    static propTypes = {
        text: PropTypes.string,
        alignText: PropTypes.string,
        icon: PropTypes.string,
        alignIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipProps: PropTypes.object,
        type: PropTypes.string,
        link: PropTypes.any,
        raised: PropTypes.any,
        rounded: PropTypes.any,
        borderless: PropTypes.any,
        textonly: PropTypes.any,
        outlined: PropTypes.any
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    componentWillUnmount() {

    }

    renderIcon() {
        if (!this.props.icon) {
            return null;
        }

        let className = classNames('r-r-button-icon', this.props.icon, {
            'r-r-margin-right-7px': this.props.rightIcon && BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.RIGHT, Alignment.TOP_RIGHT, Alignment.BOTTOM_RIGHT])
        });
        return <i className={className}></i>;
    }

    renderRightIcon() {
        if (!this.props.rightIcon) {
            return null;
        }

        let className = classNames('r-r-button-right-icon', this.props.rightIcon);
        return <i className={className}></i>;
    }

    renderText() {
        if (!this.props.text) {
            {/* return <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }}></span>; */}
            return null;
        }

        let className = classNames({
            'r-r-margin-left-7px': this.props.icon && BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.LEFT, Alignment.TOP_LEFT, Alignment.BOTTOM_LEFT ]),
            'r-r-margin-right-7px': (this.props.icon && BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.RIGHT, Alignment.TOP_RIGHT, Alignment.BOTTOM_RIGHT]) || this.props.rightIcon) 
        })
        return <span className={className}>{this.props.text}</span>;
    }

    render() {
        let className = classNames('r-r-button r-r-button-theme ', this.props.className, {
            'r-r-button-vertical': BoolUtils.equalsAny(this.props.alignIcon, [Alignment.TOP, Alignment.BOTTOM]) && this.text,
            'r-r-disabled': this.props.disabled,
            'r-r-button-rounded-border': this.props.rounded,
            'r-r-button-raised-border': this.props.raised,
            'r-r-button-textonly': this.props.textonly || this.props.outlined,
            'r-r-no-background r-r-text-decoration-underline-hover': this.props.link,
            'r-r-no-border': this.props.borderless || this.props.textonly || this.props.link,

            'r-r-primary': this.props.type === Type.PRIMARY && !this.props.textonly && !this.props.outlined && !this.props.link,
            'r-r-secondary': this.props.type === Type.SECONDARY && !this.props.textonly && !this.props.outlined && !this.props.link,
            'r-r-success': this.props.type === Type.SUCCESS && !this.props.textonly && !this.props.outlined && !this.props.link,
            'r-r-info': this.props.type === Type.INFO && !this.props.textonly && !this.props.outlined && !this.props.link,
            'r-r-warning': this.props.type === Type.WARNING && !this.props.textonly && !this.props.outlined && !this.props.link,
            'r-r-danger': this.props.type === Type.DANGER && !this.props.textonly && !this.props.outlined && !this.props.link,
            
            'r-r-primary-text': this.props.type === Type.PRIMARY && (this.props.outlined || this.props.textonly || this.props.link),
            'r-r-secondary-text': this.props.type === Type.SECONDARY && (this.props.outlined || this.props.textonly || this.props.link),
            'r-r-success-text': this.props.type === Type.SUCCESS && (this.props.outlined || this.props.textonly || this.props.link),
            'r-r-info-text': this.props.type === Type.INFO && (this.props.outlined || this.props.textonly || this.props.link),
            'r-r-warning-text': this.props.type === Type.WARNING && (this.props.outlined || this.props.textonly || this.props.link),
            'r-r-danger-text': this.props.type === Type.DANGER && (this.props.outlined || this.props.textonly || this.props.link),
            
            'r-r-primary-border-1px': this.props.type === Type.PRIMARY && this.props.outlined,
            'r-r-secondary-border-1px': this.props.type === Type.SECONDARY && this.props.outlined,
            'r-r-success-border-1px': this.props.type === Type.SUCCESS && this.props.outlined,
            'r-r-info-border-1px': this.props.type === Type.INFO && this.props.outlined,
            'r-r-warning-border-1px': this.props.type === Type.WARNING && this.props.outlined,
            'r-r-danger-border-1px': this.props.type === Type.DANGER && this.props.outlined,
            
            'r-r-primary-border-1px-focus': this.props.type === Type.PRIMARY,
            'r-r-secondary-border-1px-focus': this.props.type === Type.SECONDARY,
            'r-r-success-border-1px-focus': this.props.type === Type.SUCCESS,
            'r-r-info-border-1px-focus': this.props.type === Type.INFO,
            'r-r-warning-border-1px-focus': this.props.type === Type.WARNING,
            'r-r-danger-border-1px-focus': this.props.type === Type.DANGER,

            'r-r-stateless': this.props.type === Type.STATELESS && !this.props.link
        });
        let icon = this.renderIcon();
        let iconPreText = BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.LEFT, Alignment.TOP_LEFT, Alignment.BOTTOM_LEFT ]) ;
        let rightIcon = this.renderRightIcon();
        let text = this.renderText();
        let componentProps = ObjUtils.findDiffKeys(this.props, Button.defaultProps);

        return (
            <button ref={(el) => this.element = el} {...componentProps} className={className}>
                { iconPreText ? icon : '' }
                { text }
                { iconPreText ? '' : icon }
                { rightIcon }
            </button>
        )
    }

}
