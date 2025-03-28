import { Column, Entity, Index } from "typeorm";

@Index("rek_gas_pkey", ["bulanKeGas", "noPelangganGas", "thnGas"], {
  unique: true,
})
@Index("gas_rek_gas_fk", ["noPelangganGas"], {})
@Entity("rek_gas", { schema: "public" })
export class RekGas {
  @Column("character", { primary: true, name: "no_pelanggan_gas", length: 12 })
  noPelangganGas!: string;

  @Column("character", { primary: true, name: "thn_gas", length: 4 })
  thnGas!: string;

  @Column("character", { primary: true, name: "bulan_ke_gas", length: 2 })
  bulanKeGas!: string;

  @Column("bigint", { name: "tagihan_gas", nullable: true })
  tagihanGas!: string | null;
}
