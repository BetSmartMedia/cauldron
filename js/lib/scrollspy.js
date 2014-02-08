/*
Copyright (C) 2021 Pascal de Vink (Tweakers.net)

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/
var ScrollSpy = (function()
 {
    var elements = {};

    function init()
    {
        if (document.addEventListener)
        {
            document.addEventListener("touchmove", handleScroll, false);
            document.addEventListener("scroll", handleScroll, false);
        }
        else if (window.attachEvent)
        {
            window.attachEvent("onscroll", handleScroll);
        }
    }

    function spyOn(domElement)
    {
        var element = {};
        element['domElement'] = domElement;
        element['isInViewPort'] = true;
        elements[domElement.id] = element;
    }

    function handleScroll()
    {
        var currentViewPosition = document.documentElement.scrollTop ? document.documentElement.scrollTop: document.body.scrollTop;

        for (var i in elements) {
            var element = elements[i];
            var elementPosition = getPositionOfElement(element.domElement);

            var usableViewPosition = currentViewPosition;
            if (element.isInViewPort == false)
            {
                usableViewPosition -= element.domElement.clientHeight;
            }

            if (usableViewPosition > elementPosition)
            {
                fireOutOfSightEvent(element.domElement);
                element.isInViewPort = false;
            }
            else if (element.isInViewPort == false)
            {
                fireBackInSightEvent(element.domElement);
                element.isInViewPort = true;
            }
        };
    }

    function fireOutOfSightEvent(domElement)
    {
        fireEvent('ScrollSpyOutOfSight', domElement);
    }

    function fireBackInSightEvent(domElement)
    {
        fireEvent('ScrollSpyBackInSight', domElement);
    }

    function fireEvent(eventName, domElement)
    {
        if (document.createEvent)
        {
            var event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
            event.data = domElement;
            document.dispatchEvent(event);
        }
        else if (document.createEventObject)
        {
            var event = document.createEventObject();
            event.data = domElement
            event.expando = eventName;
            document.fireEvent('onpropertychange', event);
        }
    }

    function getPositionOfElement(domElement)
    {
        var pos = 0;
        while (domElement != null)
        {
            pos += domElement.offsetTop;
            domElement = domElement.offsetParent;
        }
        return pos;
    }

    return {
        init: init,
        spyOn: spyOn
    };
});