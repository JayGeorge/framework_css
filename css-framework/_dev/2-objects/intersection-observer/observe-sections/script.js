/* GROUP / FRAMEWORK / OBSERVE SECTIONS
=================================================== */
/* Notes...

    Based on Michelle Barker's Intersection Observer script https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/
    and the demo from that article https://codepen.io/michellebarker/pen/QWpzwYN

*/
/* HTML Example...

    <body>
        <header data-observe-sections__header></header>
        <main>
            <section data-observe-sections__section="raspberry"></section>
            <section data-observe-sections__section="vanilla"></section>
            <section data-observe-sections__section="chocolate"></section>
        </main>
    </body>

*/
function observeSections() {
    const header = document.querySelector('[data-observe-sections__header]')
    const sections = [...document.querySelectorAll('[data-observe-sections__section]')]

    let prevYPosition = 0
    let direction = 'up'

    const options = {
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

    const updateTheme = (target) => {
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
            if (window.scrollY > prevYPosition) {
                direction = 'down'
            } else {
                direction = 'up'
            }

            prevYPosition = window.scrollY

            const target = direction === 'down' ? getTargetSection(entry) : entry.target

            if (shouldUpdate(entry)) {
                updateTheme(target)
            }
        })
    }

    const observer = new IntersectionObserver(onIntersect, options)

    sections.forEach((section) => {
        observer.observe(section)
    })
}

observeSections();