import {NodeType} from '@renderer/types/api';
import {NetworkNode} from '@renderer/types/entities';

export default interface Node extends NetworkNode {
  account_number: string;
  default_transaction_fee: string;
  node_type?: NodeType;
  version: string;
}
