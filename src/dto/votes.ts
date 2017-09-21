import * as url from 'url';

export class UpVoteDTO {
    
    votedUrl: url.Url;
    upvotes: number;
    downvotes: number;

    constructor(votedUrl: url.Url, upvotes: number, downvotes: number ) {
        this.votedUrl = votedUrl;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}