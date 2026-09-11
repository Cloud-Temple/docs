#!/usr/bin/env python3
"""Ancienne commande conservée pour empêcher la régénération du catalogue périmé."""

import sys


def main():
    sys.exit(
        "Génération du catalogue statique désactivée. "
        "docs/llmaas/models.md est désormais un guide orientant vers "
        "https://llmaas.status.cloud-temple.app/lifecycle. "
        "Voir README.md pour les sources et le workflow de maintenance."
    )


if __name__ == "__main__":
    main()
