import { Column, Entity, Index } from "typeorm";

@Index("pendapat_fin_porto_fk", ["kdPendapat"], {})
@Index("stat_fin_porto_fk", ["kdStatFinRep"], {})
@Index("profile_porto_fk", ["mfcabComp", "mfkppComp", "mfnpwpComp"], {})
@Index("comp_porto_pkey", ["mfcabComp", "mfkppComp", "mfnpwpComp", "tahunPorto"], { unique: true })
@Entity("comp_porto", { schema: "public" })
export class CompPorto {
  @Column("character", { primary: true, name: "mfnpwp_comp", length: 9 })
  mfnpwpComp!: string;

  @Column("character", { primary: true, name: "mfkpp_comp", length: 3 })
  mfkppComp!: string;

  @Column("character", { primary: true, name: "mfcab_comp", length: 3 })
  mfcabComp!: string;

  @Column("character", { primary: true, name: "tahun_porto", length: 4 })
  tahunPorto!: string;

  @Column("character varying", { name: "nm_kap", nullable: true, length: 30 })
  nmKap!: string | null;

  @Column("character", { name: "kd_stat_fin_rep", nullable: true, length: 2 })
  kdStatFinRep!: string | null;

  @Column("character", { name: "kd_pendapat", nullable: true, length: 2 })
  kdPendapat!: string | null;

  @Column("numeric", {
    name: "peredaran_usaha",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  peredaranUsaha!: string | null;

  @Column("numeric", {
    name: "laba_bruto",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  labaBruto!: string | null;

  @Column("numeric", {
    name: "pengurang_bruto",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  pengurangBruto!: string | null;

  @Column("numeric", {
    name: "hasilan_net_dlm",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  hasilanNetDlm!: string | null;

  @Column("numeric", {
    name: "hasil_net_luar",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  hasilNetLuar!: string | null;

  @Column("numeric", {
    name: "hasil_net",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  hasilNet!: string | null;

  @Column("numeric", {
    name: "kompensasi_rugi",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  kompensasiRugi!: string | null;

  @Column("numeric", { name: "pkp", nullable: true, precision: 20, scale: 2 })
  pkp!: string | null;

  @Column("numeric", {
    name: "pph_terutang",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  pphTerutang!: string | null;

  @Column("numeric", {
    name: "kredit_pajak",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  kreditPajak!: string | null;

  @Column("numeric", {
    name: "pph_kurang_byr",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  pphKurangByr!: string | null;

  @Column("numeric", {
    name: "pajak_masukan",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  pajakMasukan!: string | null;

  @Column("numeric", {
    name: "pajak_keluaran",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  pajakKeluaran!: string | null;

  @Column("numeric", {
    name: "krg_lbh_bayar",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  krgLbhBayar!: string | null;
}
