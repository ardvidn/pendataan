import { Column, Entity, Index } from "typeorm";

@Index("d15_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPenilaiIndividu", "noBng", "noUrut"], { unique: true })
@Index("d15_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noFormulirIndividu", "noUrut"], { unique: true })
@Index("dat_nilai_individu_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("dat_nilai_individu", { schema: "public" })
export class DatNilaiIndividu {
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

  @Column("character", { name: "no_formulir_individu", length: 11 })
  noFormulirIndividu!: string;

  @Column("bigint", { name: "nilai_individu" })
  nilaiIndividu!: string;

  @Column("timestamp without time zone", { name: "tgl_penilaian_individu" })
  tglPenilaianIndividu!: Date;

  @Column("character", { name: "nip_penilai_individu", length: 18 })
  nipPenilaiIndividu!: string;

  @Column("timestamp without time zone", { name: "tgl_pemeriksaan_individu" })
  tglPemeriksaanIndividu!: Date;

  @Column("character", { name: "nip_pemeriksa_individu", length: 18 })
  nipPemeriksaIndividu!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_nilai_individu",
    default: () => "statement_timestamp()",
  })
  tglRekamNilaiIndividu!: Date;

  @Column("character", { name: "nip_perekam_individu", length: 18 })
  nipPerekamIndividu!: string;
}
