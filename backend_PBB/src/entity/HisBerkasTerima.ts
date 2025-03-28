import { Column, Entity, Index } from "typeorm";

@Index(
  "his_berkas_terima_pkey",
  [
    "bundelPelayanan",
    "kdBlokPemohon",
    "kdDati2Pemohon",
    "kdJnsOpPemohon",
    "kdKantor",
    "kdKanwil",
    "kdKecamatanPemohon",
    "kdKelurahanPemohon",
    "kdPropinsiPemohon",
    "kdSeksi",
    "noAgendaKirim",
    "noUrutPelayanan",
    "noUrutPemohon",
    "tglDelete",
    "thnAgendaKirim",
    "thnPelayanan",
  ],
  { unique: true }
)
@Entity("his_berkas_terima", { schema: "public" })
export class HisBerkasTerima {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", {
    primary: true,
    name: "kd_propinsi_pemohon",
    length: 2,
  })
  kdPropinsiPemohon!: string;

  @Column("character", { primary: true, name: "kd_dati2_pemohon", length: 2 })
  kdDati2Pemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kecamatan_pemohon",
    length: 3,
  })
  kdKecamatanPemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kelurahan_pemohon",
    length: 3,
  })
  kdKelurahanPemohon!: string;

  @Column("character", { primary: true, name: "kd_blok_pemohon", length: 3 })
  kdBlokPemohon!: string;

  @Column("character", { primary: true, name: "no_urut_pemohon", length: 4 })
  noUrutPemohon!: string;

  @Column("character", { primary: true, name: "kd_jns_op_pemohon", length: 1 })
  kdJnsOpPemohon!: string;

  @Column("character", { primary: true, name: "kd_seksi", length: 2 })
  kdSeksi!: string;

  @Column("character", { primary: true, name: "thn_agenda_kirim", length: 4 })
  thnAgendaKirim!: string;

  @Column("character", { primary: true, name: "no_agenda_kirim", length: 30 })
  noAgendaKirim!: string;

  @Column("character", { name: "kd_seksi_terima", length: 2 })
  kdSeksiTerima!: string;

  @Column("timestamp without time zone", {
    name: "tgl_terima",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglTerima!: Date | null;

  @Column("character", {
    name: "nip_penerima_berkas",
    nullable: true,
    length: 18,
  })
  nipPenerimaBerkas!: string | null;

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_delete",
    default: () => "statement_timestamp()",
  })
  tglDelete!: Date;
}
