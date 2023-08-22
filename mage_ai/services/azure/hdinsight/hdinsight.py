import os

from azure.mgmt.hdinsight import HDInsightManagementClient
from azure.common.credentials import ServicePrincipalCredentials

from mage_ai.server.logger import Logger
from mage_ai.services.azure.constants import (
    ENV_VAR_CLIENT_ID,
    ENV_VAR_CLIENT_SECRET,
    ENV_VAR_SUBSCRIPTION_ID,
    ENV_VAR_TENANT_ID,
)
from mage_ai.services.azure.hdinsight.config import HDInsightConfig

logger = Logger().new_server_logger(__name__)


def get_hdinsight_client(hdinsight_config: HDInsightConfig):
    if type(hdinsight_config) is dict:
        hdinsight_config = HDInsightConfig.load(config=hdinsight_config)

    client_id = os.getenv(ENV_VAR_CLIENT_ID)
    client_secret = os.getenv(ENV_VAR_CLIENT_SECRET)
    tenant_id = os.getenv(ENV_VAR_TENANT_ID)
    subscription_id = os.getenv(ENV_VAR_SUBSCRIPTION_ID)

    credentials = ServicePrincipalCredentials(
        client_id=client_id,
        secret=client_secret,
        tenant=tenant_id,
    )

    hdinsight_client = HDInsightManagementClient(credentials, subscription_id)
    return hdinsight_client


def describe_cluster(cluster_id: str, hdinsight_config: HDInsightConfig):
    if type(hdinsight_config) is dict:
        hdinsight_config = HDInsightConfig.load(config=hdinsight_config)

    hdinsight_client = get_hdinsight_client(hdinsight_config=hdinsight_config)

    cluster = hdinsight_client.clusters.get(
        resource_group_name=hdinsight_config.resource_group_name,
        cluster_name=cluster_id,
    )

    return cluster


def list_clusters(hdinsight_config: HDInsightConfig):
    if type(hdinsight_config) is dict:
        hdinsight_config = HDInsightConfig.load(config=hdinsight_config)

    hdinsight_client = get_hdinsight_client(hdinsight_config=hdinsight_config)

    clusters = hdinsight_client.clusters.list_by_resource_group(
        resource_group_name=hdinsight_config.resource_group_name,
    )

    return clusters