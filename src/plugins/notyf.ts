import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'

import { definePlugin } from '/@src/app'
import { useThemeColors } from '/@src/composable/useThemeColors'

export default definePlugin(async ({ app }) => {
  const themeColors = useThemeColors()
  let notyf: Notyf

  if (!import.meta.env.SSR) {
    const { Notyf } = await import('notyf')
    notyf = new Notyf({
      duration: 5000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'warning',
          background: themeColors.warning,
          icon: {
            className: 'fas fa-hand-paper',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'info',
          background: themeColors.info,
          icon: {
            className: 'fas fa-info-circle',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'primary',
          background: themeColors.primary,
          icon: {
            className: 'fas fa-car-crash',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'accent',
          background: themeColors.accent,
          icon: {
            className: 'fas fa-car-crash',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'purple',
          background: themeColors.purple,
          icon: {
            className: 'fas fa-check',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'blue',
          background: themeColors.blue,
          icon: {
            className: 'fas fa-check',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'green',
          background: themeColors.green,
          icon: {
            className: 'fas fa-check',
            tagName: 'i',
            text: '',
          },
        },
        {
          type: 'orange',
          background: themeColors.orange,
          icon: {
            className: 'fas fa-check',
            tagName: 'i',
            text: '',
          },
        },
      ],
    })
  }

  app.provide('notyf', {
    dismiss: (notification: NotyfNotification) => {
      notyf?.dismiss(notification)
    },
    dismissAll: () => {
      notyf?.dismissAll()
    },
    success: (payload: string | Partial<INotyfNotificationOptions>) => {
      return notyf?.success(payload)
    },
    error: (payload: string | Partial<INotyfNotificationOptions>) => {
      return notyf?.error(payload)
    },
    info: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'info',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    warning: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'warning',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    primary: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'primary',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    purple: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'purple',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    blue: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'blue',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    green: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'green',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
    orange: (payload: string | Partial<INotyfNotificationOptions>) => {
      const options: Partial<INotyfNotificationOptions> = {
        type: 'orange',
      }

      if (typeof payload === 'string') {
        options.message = payload
      } else {
        Object.assign(options, payload)
      }

      return notyf?.open(options)
    },
  })
})
