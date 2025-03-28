import { Column, Entity, Index } from "typeorm";

@Index("rek_pam_pkey", ["bulanKePam", "noPelangganPam", "thnPam"], {
  unique: true,
})
@Index("pam_rek_pam_fk", ["noPelangganPam"], {})
@Entity("rek_pam", { schema: "public" })
export class RekPam {
  @Column("character", { primary: true, name: "no_pelanggan_pam", length: 12 })
  noPelangganPam!: string;

  @Column("character", { primary: true, name: "thn_pam", length: 4 })
  thnPam!: string;

  @Column("character", { primary: true, name: "bulan_ke_pam", length: 2 })
  bulanKePam!: string;

  @Column("bigint", { name: "tagihan_pam", nullable: true })
  tagihanPam!: string | null;
}
