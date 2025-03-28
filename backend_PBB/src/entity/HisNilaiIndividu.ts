import { Column, Entity, Index } from "typeorm";

@Index("x14_1_ak", ["hisIndeksNilaiIndividu", "hisNipPenilaiIndividu", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Index("his_nilai_individu_pkey", ["hisIndeksNilaiIndividu", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("his_nilai_individu", { schema: "public" })
export class HisNilaiIndividu {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("smallint", { primary: true, name: "no_bng" })
  noBng!: number;

  @Column("smallint", { primary: true, name: "his_indeks_nilai_individu" })
  hisIndeksNilaiIndividu!: number;

  @Column("character", { name: "his_no_formulir_individu", length: 11 })
  hisNoFormulirIndividu!: string;

  @Column("bigint", { name: "his_nilai_individu" })
  hisNilaiIndividu!: string;

  @Column("timestamp without time zone", { name: "his_tgl_penilaian_individu" })
  hisTglPenilaianIndividu!: Date;

  @Column("character", { name: "his_nip_penilai_individu", length: 18 })
  hisNipPenilaiIndividu!: string;

  @Column("timestamp without time zone", { name: "his_tgl_perekaman_individu" })
  hisTglPerekamanIndividu!: Date;

  @Column("character", { name: "his_nip_perekam_individu", length: 18 })
  hisNipPerekamIndividu!: string;
}
