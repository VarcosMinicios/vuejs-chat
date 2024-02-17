export interface IUserReceipt {
  userJid: string;
  receiptTimestamp?: number | null;
  readTimestamp?: number | null;
  playedTimestamp?: number | null;
  pendingDeviceJid?: string[] | null;
  deliveredDeviceJid?: string[] | null;
}