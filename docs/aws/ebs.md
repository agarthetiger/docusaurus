# Elastic Block Storage (EBS)

When provisioning a `gp2` volume, you must figure out the size of the volume in order to get the proportional IOPS and throughput. With `gp3`, you don’t have to provision a bigger volume to get higher performance. You can choose your desired size and performance according to application need.

For unlimited instances, you should monitor the VolumeIOPSExceededCheck and VolumeThroughputExceededCheck metrics to determine whether your workload consistently attempted to drive IOPS or throughput that is greater than your volume's provisioned performance in a given minute.

## References

* <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-storage-gp3-migration-selection.html>
* <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-io-characteristics.html#ebs-io-metrics>
* 
