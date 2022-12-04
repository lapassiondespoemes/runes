export enum PostStatus {
    Draft,
    Private,
    Publish,
    Future,
    Pending,
    Trash
}

export type Post = {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    removedAt: Date,
    status: PostStatus,
    subject: string,
    summary?: string,
    content: string,
    deprecatedFormatContent?: string,
    hits: number,
    mature: boolean
    canBeCommented: boolean
    approved: boolean,
    openToVotes: boolean
}