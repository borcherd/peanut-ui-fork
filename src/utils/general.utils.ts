import * as interfaces from '@/interfaces'
import peanut from '@squirrel-labs/peanut-sdk'

export const shortenAddress = (address: string) => {
    const firstBit = address.substring(0, 6)

    return firstBit + '..'
}

export const shortenAddressLong = (address: string) => {
    const firstBit = address.substring(0, 6)
    const endingBit = address.substring(address.length - 4, address.length)

    return firstBit + '...' + endingBit
}

export const shortenHash = (address: string) => {
    const firstBit = address.substring(0, 8)
    const endingBit = address.substring(address.length - 6, address.length)

    return firstBit + '...' + endingBit
}

export function waitForPromise<T>(promise: Promise<T>, timeoutTime: number = 30000): Promise<T> {
    return new Promise((resolve, reject) => {
        let timeoutId = setTimeout(() => {
            reject('Timeout: 30 seconds have passed without a response from the promise')
        }, timeoutTime)

        promise
            .then((result) => {
                clearTimeout(timeoutId)
                resolve(result)
            })
            .catch((error) => {
                clearTimeout(timeoutId)
                reject(error)
            })
    })
}

export const saveToLocalStorage = (key: string, data: any) => {
    try {
        // Convert the data to a string before storing it in localStorage
        const serializedData = JSON.stringify(data)
        localStorage.setItem(key, serializedData)
        console.log(`Saved ${key} to localStorage:`, data)
    } catch (error) {
        console.error('Error saving to localStorage:', error)
    }
}

export const getFromLocalStorage = (key: string) => {
    try {
        const data = localStorage.getItem(key)
        if (data === null) {
            console.log(`No data found in localStorage for ${key}`)
            return null
        }
        const parsedData = JSON.parse(data)
        console.log(`Retrieved ${key} from localStorage:`, parsedData)
        return parsedData
    } catch (error) {
        console.error('Error getting data from localStorage:', error)
    }
}

export const delteFromLocalStorage = (key: string) => {
    try {
        localStorage.removeItem(key)
        console.log(`Removed ${key} from localStorage`)
    } catch (error) {
        console.error('Error removing from localStorage:', error)
    }
}

export const getAllLinksFromLocalStorage = ({ address }: { address: string }) => {
    try {
        const localStorageData: interfaces.ILocalStorageItem[] = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key !== null && key?.includes(address)) {
                const value = localStorage.getItem(key)
                if (
                    value !== null &&
                    !key.includes('- raffle -') &&
                    !key.includes('saving giga-link for address:') &&
                    !key.includes('saving temp') &&
                    value.includes('/claim')
                ) {
                    const x = {
                        address: key.split('-')[0].trim(),
                        hash: key.split('-')[1]?.trim() ?? '',
                        idx: key.split('-')[2]?.trim() ?? '',
                        link: value.replaceAll('"', ''),
                    }
                    localStorageData.push(x)
                }
            }
        }
        return localStorageData
    } catch (error) {
        console.error('Error getting data from localStorage:', error)
    }
}

export const getAllRaffleLinksFromLocalstorage = ({ address }: { address: string }) => {
    try {
        const localStorageData: interfaces.ILocalStorageItem[] = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key !== null && key?.includes(address)) {
                const value = localStorage.getItem(key)

                if (
                    value !== null &&
                    (key.includes('- raffle -') ||
                        value.includes('/packet') ||
                        key.includes('giga-link') ||
                        key.includes('gigalink')) &&
                    !key.includes('saving giga-link for address:') &&
                    !key.includes('saving temp')
                ) {
                    if (key.includes('- raffle - ')) {
                        localStorageData.push({
                            address: key.split('-')[0].trim(),
                            hash: key.split('-')[2]?.trim() ?? '',
                            idx: '0',
                            link: value.replaceAll('"', ''),
                        })
                    } else if (key.includes('giga-link')) {
                        const startIndex = key.indexOf('0x')
                        if (startIndex === -1) {
                            return
                        }

                        let endIndex = key.indexOf(' ', startIndex)
                        if (endIndex === -1) {
                            endIndex = key.length
                        }
                        const address = key.substring(startIndex, endIndex)

                        localStorageData.push({
                            address: address,
                            hash: '',
                            idx: '0',
                            link: value.replaceAll('"', ''),
                        })
                    } else if (key.includes('gigalink')) {
                        const v = JSON.parse(value)

                        if (v.completed) {
                            localStorageData.push({
                                address: key.split('-')[0].trim(),
                                hash: key.split('-')[2]?.trim() ?? '',
                                idx: '0',
                                link: v.finalLink,
                            })
                        }
                    } else if (value.includes('/packet')) {
                        const x = {
                            address: key.split('-')[0].trim(),
                            hash: key.split('-')[1]?.trim() ?? '',
                            idx: '',
                            link: value.replaceAll('"', ''),
                        }
                        localStorageData.push(x)
                    }
                }
            }
        }
        console.log(localStorageData)
        return localStorageData
    } catch (error) {
        console.error('Error getting data from localStorage:', error)
    }
}

export const getAllGigalinksFromLocalstorage = ({ address }: { address: string }) => {
    try {
        const localStorageData: interfaces.ILocalStorageItem[] = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key !== null && key?.includes('saving giga-link for address: ' + address)) {
                const value = localStorage.getItem(key)
                if (value !== null) {
                    const x = {
                        address: key.split('-')[0].trim(),
                        hash: key.split('-')[1]?.trim() ?? '',
                        idx: key.split('-')[2]?.trim() ?? '',
                        link: value.replaceAll('"', ''),
                    }
                    localStorageData.push(x)
                }
            }
        }
        return localStorageData
    } catch (error) {
        console.error('Error getting data from localStorage:', error)
    }
}

export function formatAmountWithDecimals({ amount, decimals }: { amount: number; decimals: number }) {
    const divider = 10 ** decimals
    const formattedAmount = amount / divider
    return formattedAmount
}

export function formatAmount(amount: number) {
    return amount.toFixed(2)
}

export function formatTokenAmount(amount: number, maxFractionDigits?: number) {
    maxFractionDigits = maxFractionDigits ?? 6
    const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: maxFractionDigits,
    })
    return formattedAmount
}

export const formatAmountWithoutComma = (input: string) => {
    const numericValue = input.replace(/,/g, '.')
    const regex = new RegExp(`^[0-9]*\\.?[0-9]*$`)
    if (numericValue === '' || regex.test(numericValue)) {
        return numericValue
    } else return ''
}

export function formatMessage(message: string) {
    return message
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => !!line)
        .join('\n')
}

export const isMantleInUrl = (): boolean => {
    if (typeof window !== 'undefined') {
        return window.location.origin.includes('mantle') ? true : false
    } else {
        return false
    }
}

export async function resolveFromEnsName(ensName: string): Promise<string | undefined> {
    const provider = await peanut.getDefaultProvider('1')
    const x = await provider.resolveName(ensName)

    return x ? x : undefined
}

export function generateSafeUrl({ currentUrl, chainId }: { currentUrl: string; chainId: number }) {
    return `https://app.safe.global/share/safe-app?appUrl=${encodeURIComponent(currentUrl)}&chain=${chainId}`
}

// TODO: this is a hacky fix to copy in an iframe where the clipboard API is not supported/blocked
export async function copyTextToClipboardWithFallback(text: string) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text)
            return
        } catch (err) {
            console.error('Clipboard API failed, trying fallback method. Error:', err)
        }
    }

    try {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        document.body.removeChild(textarea)
    } catch (err) {
        console.error('Fallback method failed. Error:', err)
    }
}

// This is a helper function to compare versions, if version1 is greater than version2, it returns false, otherwise true
// Always pass in the LTS version as version1
// TODO: export this function from the SDK
export function compareVersions(version1: string, version2: string, lead: string): boolean {
    const v1 = version1.startsWith(lead) ? version1.substring(lead.length) : version1
    const v2 = version2.startsWith(lead) ? version2.substring(lead.length) : version2

    const parts1 = v1.split('.').map(Number)
    const parts2 = v2.split('.').map(Number)

    const maxLength = Math.max(parts1.length, parts2.length)

    for (let i = 0; i < maxLength; i++) {
        const part1 = i < parts1.length ? parts1[i] : 0
        const part2 = i < parts2.length ? parts2[i] : 0

        if (part1 > part2) return false
        if (part1 < part2) return true
    }
    return true
}
