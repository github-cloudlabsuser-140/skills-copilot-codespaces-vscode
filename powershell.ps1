# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestoraccount"
$skuName = "Standard_LRS" # Locally-redundant storage

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind "StorageV2" # General-purpose v2 account