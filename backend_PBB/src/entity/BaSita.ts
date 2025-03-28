import { Column, Entity, Index } from "typeorm";

@Index("g21_g15_fk", ["kdKantor", "kdKanwil", "noSpmp"], {})
@Index("ba_sita_pkey", ["kdKantor", "kdKanwil", "noBaSita"], { unique: true })
@Entity("ba_sita", { schema: "public" })
export class BaSita {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character varying", {
    primary: true,
    name: "no_ba_sita",
    length: 30,
  })
  noBaSita!: string;

  @Column("character", { name: "no_spmp", length: 30 })
  noSpmp!: string;

  @Column("timestamp without time zone", { name: "tgl_ba_sita" })
  tglBaSita!: Date;

  @Column("character varying", {
    name: "keterangan_spmp",
    nullable: true,
    length: 75,
  })
  keteranganSpmp!: string | null;

  @Column("character varying", { name: "saksi_sita_1", length: 30 })
  saksiSita_1!: string;

  @Column("character varying", {
    name: "pekerjaan_saksi_1",
    nullable: true,
    length: 30,
  })
  pekerjaanSaksi_1!: string | null;

  @Column("character varying", {
    name: "saksi_sita_2",
    nullable: true,
    length: 30,
  })
  saksiSita_2!: string | null;

  @Column("character varying", {
    name: "pekerjaan_saksi_2",
    nullable: true,
    length: 30,
  })
  pekerjaanSaksi_2!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_ba_sita",
    default: () => "statement_timestamp()",
  })
  tglRekamBaSita!: Date;

  @Column("character", { name: "nip_perekam_ba_sita", length: 18 })
  nipPerekamBaSita!: string;
}
