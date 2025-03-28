import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { KeputusanAngsuranPbb } from "./KeputusanAngsuranPbb";
import { Pegawai } from "./Pegawai";

@Index("rincian_angsuran_pbb_pkey", ["angsuranKe", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("rincian_angsuran_pbb", { schema: "public" })
export class RincianAngsuranPbb {
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

  @Column("smallint", {
    primary: true,
    name: "angsuran_ke",
    default: () => "1",
  })
  angsuranKe!: number;

  @Column("bigint", { name: "jml_pokok_angsuran" })
  jmlPokokAngsuran!: string;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo",
    default: () => "statement_timestamp()",
  })
  tglJatuhTempo!: Date;

  @Column("bigint", { name: "jml_denda_adm", nullable: true })
  jmlDendaAdm!: string | null;

  @Column("character", {
    name: "status_pembayaran",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaran!: string;

  @Column("character", {
    name: "status_tagihan",
    length: 1,
    default: () => "'0'",
  })
  statusTagihan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_angsuran",
    default: () => "statement_timestamp()",
  })
  tglRekamAngsuran!: Date;

  @ManyToOne(() => KeputusanAngsuranPbb, (keputusanAngsuranPbb) => keputusanAngsuranPbb.rincianAngsuranPbbs)
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
  keputusanAngsuranPbb!: KeputusanAngsuranPbb;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.rincianAngsuranPbbs)
  @JoinColumn([{ name: "nip_perekam_angsuran", referencedColumnName: "nip" }])
  nipPerekamAngsuran!: Pegawai;
}
