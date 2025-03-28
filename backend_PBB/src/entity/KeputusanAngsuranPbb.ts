import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Sppt } from "./Sppt";
import { Pegawai } from "./Pegawai";
import { RincianAngsuranPbb } from "./RincianAngsuranPbb";

@Index("keputusan_angsuran_pbb_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("keputusan_angsuran_pbb", { schema: "public" })
export class KeputusanAngsuranPbb {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("character varying", { name: "no_sk_angsuran", length: 30 })
  noSkAngsuran!: string;

  @Column("timestamp without time zone", { name: "tgl_sk_angsuran" })
  tglSkAngsuran!: Date;

  @Column("character varying", {
    name: "nm_pemohon",
    nullable: true,
    length: 30,
  })
  nmPemohon!: string | null;

  @Column("character varying", {
    name: "no_srt_permohonan",
    nullable: true,
    length: 30,
  })
  noSrtPermohonan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_srt_permohonan",
    nullable: true,
  })
  tglSrtPermohonan!: Date | null;

  @Column("character", { name: "jns_ketetapan", nullable: true, length: 1 })
  jnsKetetapan!: string | null;

  @Column("character varying", {
    name: "no_srt_ketetapan",
    nullable: true,
    length: 30,
  })
  noSrtKetetapa!: string | null;

  @Column("bigint", { name: "pbb_terutang", nullable: true })
  pbbTerutan!: string | null;

  @Column("character varying", {
    name: "no_tanda_terima",
    nullable: true,
    length: 30,
  })
  noTandaTerim!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_tanda_terima",
    nullable: true,
  })
  tglTandaTerima!: Date | null;

  @Column("character varying", {
    name: "no_lap_penelitian",
    nullable: true,
    length: 30,
  })
  noLapPenelitia!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_lap_penelitian",
    nullable: true,
  })
  tglLapPenelitian!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_sk_angsuran",
    default: () => "statement_timestamp()",
  })
  tglRekamSkAngsuran!: Date;

  @OneToOne(() => Sppt, (sppt) => sppt.keputusanAngsuranPbb)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_sppt", referencedColumnName: "thnPajakSppt" },
  ])
  sppt!: Sppt;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.keputusanAngsuranPbbs)
  @JoinColumn([{ name: "nip_perekam_sk_angsuran", referencedColumnName: "nip" }])
  nipPerekamSkAngsuran!: Pegawai;

  @OneToMany(() => RincianAngsuranPbb, (rincianAngsuranPbb) => rincianAngsuranPbb.keputusanAngsuranPbb)
  rincianAngsuranPbbs!: RincianAngsuranPbb[];
}
