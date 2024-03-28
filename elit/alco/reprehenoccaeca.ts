preapprove({
  /**
   * The name of the project.
   */
  project: string;
  /**
   * The name of the location.
   */
  location: string;
  /**
   * The name of the model.
   */
  model: string;
  /**
   * The name of the feature.
   */
  feature: string;
  /**
   * The ID to use for the pre-approved config.
   */
  preapprovalId: string;
  /**
   * The pre-approved config.
   */
  preapprovalConfig: PreApprovalConfig;
}): Promise<LROperation<protos.google.cloud.ethos.v1.Preapproval, protos.google.cloud.ethos.v1.OperationMetadata>>;
