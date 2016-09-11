export interface PixivRepo {
	supports: (action: string) => boolean
	dispatch: <T> (action: string, message: any) => Promise<T> | T
	teardown: () => void
}
