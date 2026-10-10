'use client';

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.scss'
import { portfolioProjects } from './projects'

type ModalView = 'desktop' | 'mobile'

const Portfolio = () => {
  const [activeSlug, setActiveSlug] = useState(portfolioProjects[0].slug)
  const [warm, setWarm] = useState(false)
  const [view, setView] = useState<ModalView>('desktop')
  const modalRef = useRef<HTMLDialogElement>(null)
  const active = portfolioProjects.find((p) => p.slug === activeSlug) ?? portfolioProjects[0]
  const hasMobile = Boolean(active.fullImageMobile && active.fullImageMobileSize)
  const showMobile = view === 'mobile' && hasMobile

  const openModal = () => {
    setView('desktop')
    setWarm(true)
    modalRef.current?.showModal()
  }

  return (
    <div className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className={styles.portfolioTitle}>Projetos</h2>
        <p className={styles.portfolioSubtitle}>Trabalhos que entreguei, com o que fiz em cada um.</p>

        <div className={styles.portfolioList} role="tablist" aria-label="Projetos">
          {portfolioProjects.map((project) => {
            const isActive = project.slug === active.slug
            return (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="portfolio-detail"
                className={`${styles.portfolioItem} ${isActive ? styles.portfolioItemActive : ''}`}
                onClick={() => setActiveSlug(project.slug)}
              >
                <span className={styles.portfolioItemThumb}>
                  <Image src={project.image} alt="" width={160} height={120} />
                </span>
                <span className={styles.portfolioItemText}>
                  <span className={styles.portfolioItemCategory}>{project.category}</span>
                  <span className={styles.portfolioItemTitle}>{project.title}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className={styles.portfolioDetail} id="portfolio-detail" role="tabpanel" key={active.slug}>
          <button
            type="button"
            className={styles.portfolioImage}
            onClick={openModal}
            onMouseEnter={() => setWarm(true)}
            onFocus={() => setWarm(true)}
            onTouchStart={() => setWarm(true)}
            aria-label={`Ver captura completa do site ${active.title}`}
          >
            <Image
              src={active.image}
              alt={active.imageAlt}
              width={1440}
              height={1080}
              sizes="(max-width: 767px) 100vw, 520px"
            />
          </button>

          <div className={styles.portfolioContent}>
            <span className={styles.portfolioTag}>{active.category}</span>
            <h3 className={styles.portfolioDetailTitle}>{active.title}</h3>
            <p>{active.description}</p>
            {active.contractedBy && <p><strong>Contratados por:</strong> {active.contractedBy}</p>}
            <p><strong>O que fiz:</strong> {active.did}</p>
            {active.didNot && <p><strong>O que não fiz:</strong> {active.didNot}</p>}
            <ul className={styles.portfolioChips}>
              {active.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <button
              type="button"
              className={styles.portfolioLink}
              onClick={openModal}
              onMouseEnter={() => setWarm(true)}
              onFocus={() => setWarm(true)}
              onTouchStart={() => setWarm(true)}
            >
              Ver o site →
            </button>
          </div>
        </div>

        <dialog
          ref={modalRef}
          className={`${styles.portfolioModal} ${showMobile ? styles.portfolioModalPhone : ''}`}
          aria-label={`Captura do site ${active.title}`}
          onClick={(e) => { if (e.target === modalRef.current) modalRef.current?.close() }}
        >
          <div className={styles.modalBar}>
            <div className={styles.modalDots} aria-hidden="true">
              <span /><span /><span />
            </div>

            <div className={styles.modalAddress} title={active.url}>
              <span className={styles.modalHost}>{active.url ? new URL(active.url).hostname : active.title}</span>
            </div>

            {hasMobile && (
              <div className={styles.modalToggle} role="group" aria-label="Versão da captura">
                {(['desktop', 'mobile'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={view === option}
                    className={view === option ? styles.modalToggleActive : ''}
                    onClick={() => setView(option)}
                  >
                    {option === 'desktop' ? 'Desktop' : 'Mobile'}
                  </button>
                ))}
              </div>
            )}

            <button
              type="button"
              className={styles.modalClose}
              onClick={() => modalRef.current?.close()}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>

          <div className={styles.modalBody}>
            <div className={styles.modalScreen}>
              {warm && <Image
                key={showMobile ? 'mobile' : 'desktop'}
                loading="eager"
                src={showMobile ? active.fullImageMobile! : active.fullImage}
                alt={`Captura completa do site ${active.title} (${showMobile ? 'mobile' : 'desktop'})`}
                width={showMobile ? active.fullImageMobileSize!.width : active.fullImageSize.width}
                height={showMobile ? active.fullImageMobileSize!.height : active.fullImageSize.height}
                sizes={showMobile ? '390px' : '(max-width: 1100px) 92vw, 1100px'}
              />}
            </div>
          </div>

          <div className={styles.modalFooter}>
            <strong>{active.title}</strong>
            <span>{active.captureNote ?? 'Captura de tela da página completa, como foi publicada.'} Role para ver tudo.</span>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Portfolio
