/* GROUP OBSERVE SECTIONS
=================================================== */
/* Notes...

    Based on Michelle Barker's Intersection Observer script https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/
    and the demo from that article https://codepen.io/michellebarker/pen/QWpzwYN

*/
function observeSections() {
    const header = document.querySelector('[data-observe-sections__header]')
    const sections = [...document.querySelectorAll('[data-observe-sections__section]')]
    const scrollRoot = document.querySelector('[data-observe-sections__scroller]')

    let prevYPosition = 0
    let direction = 'up'

    const options = {
        root: scrollRoot,
        rootMargin: `${header.offsetHeight * -1}px`,
        threshold: 0
    }

    const getTargetSection = (entry) => {
        const index = sections.findIndex((section) => section == entry.target)

        if (index >= sections.length - 1) {
        return entry.target
        } else {
        return sections[index + 1]
        }
    }

    const updateColors = (target) => {
        const theme = target.dataset.observeSections__section
        header.setAttribute('data-observe-sections__theme', theme)
    }

    const shouldUpdate = (entry) => {
        if (direction === 'down' && !entry.isIntersecting) {
            return true
        }

        if (direction === 'up' && entry.isIntersecting) {
            return true
        }

        return false
    }

    const onIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (scrollRoot.scrollTop > prevYPosition) {
                direction = 'down'
            } else {
                direction = 'up'
            }

            prevYPosition = scrollRoot.scrollTop

            const target = direction === 'down' ? getTargetSection(entry) : entry.target

            if (shouldUpdate(entry)) {
                updateColors(target)
            }
        })
    }

    const observer = new IntersectionObserver(onIntersect, options)

    sections.forEach((section) => {
        observer.observe(section)
    })
}

observeSections();