/** Lifecycle of a document processed by the AI extractor. Shared across features. */
export type ExtractionStatus = 'processing' | 'review' | 'saved' | 'failed';
