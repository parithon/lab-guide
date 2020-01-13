---
title: "Configure Hyper-V Networking"
synopsis: "Instructions on how to setup your Hyper-V virtual network"
date: "2020-01-08T00:00:00Z"
author: "Anthony Conrad"
series: "Hyper-V"
order: 2
---

Follow this guide to configure your Hyper-V virtual networks used by Lab Guide modules.

## Create Virtual Network Switches

Lab Guide modules will utilize two (2) virtual networks. One to represent the internal network of your labs, and the other to represent external networks.

```PowerShell
> New-VMSwitch -SwitchName "Lab A - Internal" -SwitchType Private
> New-VMSwitch -SwitchName "Lab B - External" -SwitchType Internal
```

### Optional NAT setup for Lab B

If you want to be able to access the internet within your lab envirornment, you will need to utilize NAT (network address translation). Follow these steps to enable the *Lab B* network to have access to the internet.

```PowerShell
> New-NetIPAddress -IPAddress 203.0.113.254 -PrefixLength 24 -InterfaceAlias "Lab B - External"
> New-NetNat -Name "Lab B - External NAT" -InternalIPInterfaceAddressPrefix 203.0.113.0/24
```

### Remove NAT

If you want to remove the NAT configuration later, you can use the following script:

```PowerShell
> Get-NetNat -Name "Lab B - External NAT" | Remove-NetNat
```

### Remove Virtual Network Switches

When you want to remove the virtual switches, you can use the following script:

```PowerShell
> Get-VMSwitch | ? Name -Like "Lab*" | Remove-VMSwitch
```
